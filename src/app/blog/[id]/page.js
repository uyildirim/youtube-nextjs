import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className="">
            <div className="">
                <div className="">
                    <h1 className="">data.title</h1>
                    <p className="">
                        data.desc
                    </p>
                    <div className="">
                        <Image
                            src=""
                            alt=""
                            width={40}
                            height={40}
                            className=""
                        />
                        <span className="">data.username</span>
                    </div>
                </div>
                <div className="">
                    <Image
                        src=""
                        alt=""
                        fill={true}
                        className=""
                    />
                </div>
            </div>
            <div className="">
                <p className="">
                    data.content
                </p>
            </div>
        </div>
    )
}
