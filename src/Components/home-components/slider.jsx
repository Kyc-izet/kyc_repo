import css from './slider.module.css'
import img1 from '../../Screens/AMITY.png'

import React from 'react'

function slider() {
    return (
        <div>
            <div className={css.container}>
                <h1>TOP ENGINEERING COLLEGES OF INDIA</h1>
                <div style={{ position: 'relative' }}>
                    <div className={`${css.flex} ${css.animate}`}>
                        <div className={css.list} style={{ width: '50%' }}>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                        </div>
                        <div className={css.list} style={{ width: '50%' }}>
                        <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={css.container}>
                <h1>TOP ENGINEERING COLLEGES OF UTTAR PRADESH</h1>
                <div style={{ position: 'relative' }}>
                    <div className={`${css.flex} ${css.animate}`}>
                        <div className={css.list} style={{ width: '50%' }}>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                        </div>
                        <div className={css.list} style={{ width: '50%' }}>
                        <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                            <div className={css.image}>
                                <img src={img1} />
                                <div className={css.content}>
                                    <p>College</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default slider