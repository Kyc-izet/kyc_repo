import React from 'react'
import css from './Community.module.css'
import { FaLinkedin, FaWhatsapp, FaQuora, FaDiscord, FaInstagram } from "react-icons/fa";

const Community = () => {
    return (
        <div>
            <div className={css.container}>
                <h1>Community Page</h1>
                <div className={css.pages}>
                    <div className={css.links}>
                        <FaWhatsapp color="white" size="6rem" />
                        <h1 className={css.name}>WhatsApp Community</h1>
                        <a className={css.btn} href="https://chat.whatsapp.com/LhMiXCqeYg6Lm7hJa8nseW">Join Community</a>
                    </div>
                    <div className={css.links}>
                        <FaInstagram color="white" size="6rem" />
                        <h1 className={css.name}>InstaGram Community</h1>
                        <a className={css.btn} href="https://instagram.com/knowyourcolleges_kyc?igshid=OGQ5ZDc2ODk2ZA==">Join Community</a>
                    </div>
                </div>
                <div className={css.pages}>
                    <div className={css.links}>
                        <FaQuora color="white" size="6rem" />
                        <h1 className={css.name}>Quora Community</h1>
                        <a className={css.btn} href="https://knowyourcolleges.quora.com/?ch=3&oid=4528461&share=396067ef&srid=3nOE3n&target_type=tribe">Join Community</a>
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