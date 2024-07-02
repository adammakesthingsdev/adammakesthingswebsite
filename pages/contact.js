import Page from "@/components/pageLayout";
import styles from "/style/blog.module.css";
import contactStyles from "/style/contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Contact()
{
    return(
        <Page springy={false}>
            
            <div className={contactStyles.contactBox}>
                <h1>Get in touch</h1>

                <LinkButton
                    icon="fa-solid fa-envelope" 
                    name="adam@adammakesthings.dev" 
                    service="Email" 
                    url="mailto:adam@adammakesthings.dev"/>
                <LinkButton
                    icon="fa-brands fa-slack" 
                    name="@adammakesthings" 
                    service="Slack" 
                    url="https://hackclub.slack.com/team/U0641AYUJ91"/>
                <LinkButton
                    icon="fa-brands fa-github" 
                    name="adammakesthingsdev" 
                    service="GitHub" 
                    url="https://github.com/adammakesthingsdev"/>
                <LinkButton
                    icon="fa-brands fa-discord" 
                    name="@adammakesthings" 
                    service="Discord" 
                    url="https://discord.com/users/1128330977500991629"/>               
            </div>
        </Page>
    )
}

export function LinkButton({icon,url,service,name}){
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