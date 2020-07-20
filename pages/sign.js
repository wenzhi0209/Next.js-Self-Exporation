import React, { Component } from 'react';
import SignatureCanvas from 'react-signature-canvas'


class Signature extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            trimmedDataURL:'',
        }
        this.clear = this.clear.bind(this);
        this.trim = this.trim.bind(this);
    }

    sigCanvas = {clear:()=>{},toDataURL:(param)=>{return ""}};
    clear(){
        this.sigCanvas.clear();
    }
    trim(){
        console.log(this.sigCanvas);
        //let trimmedCanvas = this.sigCanvas.getTrimmedCanvas();
        this.setState({trimmedDataURL: this.sigCanvas.toDataURL('image/png')})
    }
    render() {
        let {trimmedDataURL} = this.state;
        return (
            <>
            <div className="insurance-success">
                <div className="qianming">
                    <SignatureCanvas penColor="green"
                                 canvasProps={{width: 300, height: 200, className: 'sigCanvas'}}
                                     ref={(ref) => { this.sigCanvas = ref }}/>
                    <button className="buttons" onClick={this.clear}>
                        Clear
                    </button>
                    <button className="buttons" onClick={this.trim}>
                        Trim
                    </button>

                    {trimmedDataURL
                        ? <img className=""
                               src={trimmedDataURL} />
                        : null}
                </div>
            </div>
            <style jsx global>{`
             .qianming{
                width: 100%;
                text-align: center;
                border: 1px solid #999999;
                margin-bottom: 50px;
             }
                .buttons {
                    width: 100%;
                    height: 30px;
                }
        
                .sigImage {
                    background-size: 200px 50px;
                    width: 200px;
                    height: 50px;
                    background-color: white;
                }

         `}</style>
         </>
        )
    }

}

export default Signature;
