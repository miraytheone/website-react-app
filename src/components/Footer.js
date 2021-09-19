import React, { Component } from 'react'
import w from '../img/w.png';
import d from '../img/d.png';
import dd from '../img/dd.jpg';
import tema from '../img/tema.png';
import g from '../img/g.png';
import './Footer.css';
import { variables } from '../Variable';


export class Footer extends Component{
    constructor(props){
        super(props);

        this.state={
            Inform:[],
            InformId:0,
            InformMessage:"",
        }
    }

    refreshList(){
        fetch(variables.API_URL+'Inform')
        .then(response=>response.json())
        .then(data=>{
            this.setState({Inform:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    changeInformMessage =(e)=>{
        this.setState({InformMessage:e.target.value});
    }

    sendClick(){
        fetch(variables.API_URL+'Inform',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                InformMessage:this.state.InformMessage
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.refreshList();
        },(error)=>{
            alert('Failed');
        })
    }

    render(){
        return (
            <div>
                <div id="footer">
                <div className="footerBox">
                <iframe width="360" height="315" src="https://waqi.info/tr/#/c/27.822/29.592/2.3z" title="Youtube video player" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="footerBox ">
                <h3> ÇEVRE İHBAR HATTI</h3>
                <form action="" id="iletisimForm">
                    <input id="emailBox" type="text" onChange={this.changeInformMessage} />
                    <button id="gonderBtn" onClick={() => this.sendClick()}>Gönder</button>
                </form>
            </div>
            <div class="footerBox">
                <h3>ÇEVRE SİTE BAĞLANTILARI</h3>
                <ul>
                    <li><a href="https://www.wwf.org.tr/"><img src={w}  width="55" height="66" alt="https://www.wwf.org.tr/"/> <a href="https://www.tema.org.tr/"><img src={tema} width="55" height="66"  alt="https://www.tema.org.tr/"/></a> </a></li>
                    <li><a href="https://www.dkm.org.tr/"><img src={d} width="55" height="66" alt=" https://www.dkm.org.tr/"/> <a href="https://www.greenpeace.org/turkey/"><img src={g} width="55" height="66" alt="https://www.greenpeace.org/turkey/"/></a></a></li>
                    <li><a href="http://dogakorumadernegi.org/"><img src={dd} width="55" height="66" alt="http://dogakorumadernegi.org/"/></a></li>
                </ul>
            </div>
            <div class="footerBoxCopyright"> .....KAZANCIMIZ GELECEĞİMİZ.....</div>
        </div>
            </div>
        )
    }
}

    


export default Footer;
