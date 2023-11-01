import React from 'react'
import css from './Community.module.css'
import { FaLinkedin, FaWhatsapp, FaInstagram, FaDiscord } from "react-icons/fa";

const Community = () => {
    return (
        <div>
            <div className={css.container}>
                <h1>Community Page</h1>
                <div className={css.pages}>
                    <div className={css.links}>
                        <FaWhatsapp color="white" size="6rem" />
                        <h1 className={css.name}>WhatsApp Community</h1>
                        <a className={css.btn} href="https://wa.me/message/37PSY2CRRSIJE1">Join Community</a>
                    </div>
                    <div className={css.links}>
                        <FaInstagram color="white" size="6rem" />
                        <h1 className={css.name}>Instagram Community</h1>
                        <a className={css.btn} href="https://instagram.com/knowyourcolleges_kyc?igshid=OGQ5ZDc2ODk2ZA==">Join Community</a>
                    </div>
                </div>
                <div className={css.pages}>
                    <div className={css.links}>
                        <FaLinkedin color="white" size="6rem" />
                        <h1 className={css.name}>LinkedIn Community</h1>
                        <a className={css.btn} href="https://www.linkedin.com/company/know-your-colleges/">Join Community</a>
                    </div>
                    <div className={css.links}>
                        <FaDiscord color="white" size="6rem" />
                        <h1 className={css.name}>Discord Community</h1>
                        <a className={css.btn} href="https://discord.gg/YV35EArh">Join Community</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community