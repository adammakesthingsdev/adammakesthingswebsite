import Page from "@/components/pageLayout";
import contactStyles from "/style/contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faGithub, faSlack } from "@fortawesome/free-brands-svg-icons";


export default function Contact()
{
    return(
        <Page springy={false}>
            
            <div className={contactStyles.contactBox}>
                <h1>Get in touch</h1>

                <LinkButton
                    icon={faEnvelope} 
                    name="adam@adammakesthings.dev" 
                    service="Email" 
                    url="mailto:adam@adammakesthings.dev"/>
                <LinkButton
                    icon={faSlack} 
                    name="@adammakesthings" 
                    service="Slack" 
                    url="https://hackclub.slack.com/team/U0641AYUJ91"/>
                <LinkButton
                    icon={faGithub} 
                    name="adammakesthingsdev" 
                    service="GitHub" 
                    url="https://github.com/adammakesthingsdev"/>
                <LinkButton
                    icon={faDiscord} 
                    name="@adammakesthings" 
                    service="Discord" 
                    url="https://discord.com/users/1128330977500991629"/>               
            </div>
        </Page>
    )
}

interface LinkButtonProps{
    icon:IconProp;
    url:string;
    service:string;
    name:string;
}
export function LinkButton({icon,url,service,name}:LinkButtonProps){
    return(
        <a href={url} className={contactStyles.linkHolder}>
            <div className={contactStyles.icon}>
                <FontAwesomeIcon icon={icon} className={contactStyles.icon}/>
            </div>
            <div className={contactStyles.nameHolder}>
                <h3>{name}</h3>
                <h4>{service}</h4>
            </div>
        </a>
    )
}