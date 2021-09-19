import React from 'react';
import { variables } from '../Variable';
import './UyeGiris.css';
import { SyntheticEvent , useState} from 'react';
import { Redirect } from 'react-router';

const UyeKayit = () => {
    const [MemberName, setName] = useState('');
    const [MemberSurname, setSurname] =useState('');
    const [MemberMail, setEmail] = useState('');
    const [MemberPassword, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch(variables.API_URL+'authentication/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                MemberName,
                MemberSurname,
                MemberMail,
                MemberPassword
            })
        });

        setRedirect(true);
    }

    if (redirect) {
        return <Redirect to="/uyegiris"/>;
    }
    
   
        
        return (
            <div>
                
                    <div id="üyeFormu">
                        <form onSubmit={submit}>
                            <h3>ÜYE KAYIT FORMU</h3>
                            <input type="text" name="MemberName" placeholder="adınız" required 
                             onChange={e=> setName(e.target.value)} />
    
                            <input type="text" name="MemberSurname" placeholder="soyadınız" required 
                            onChange={e=> setSurname(e.target.value)}/>
                            
                            <input type="text" name="MemberMail" placeholder="eposta giriniz" required 
                           onChange={e=> setEmail(e.target.value)}/>
                            
                            <input type="password" name="MemberPassword" placeholder="şifrenizi giriniz"
                            onChange={e=> setPassword(e.target.value)} />
                            
                            <button  type="submit" >Kayıt ol</button>
                        </form>
                        
                    </div>
          </div>
        );
    };
    
export default UyeKayit;

