import Image from 'next/image'
import React from 'react'

export default function page() {
    return (
        <div className="">
            <div className="flex gap-10">
                <div className="flex-1">
                    <h1 className="">Do irure laboris nisi id.</h1>
                    <p className="">
                        Deserunt ex aliqua amet labore. Adipisicing aute commodo ullamco exercitation ut officia. Eu sit fugiat excepteur dolore sit veniam sint Lorem fugiat magna non.
                    </p>
                    <div className="flex items-center gap-5">
                        <Image
                            src="https://images.pexels.com/photos/2777898/pexels-photo-2777898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt=""
                            width={40}
                            height={40}
                            className=" rounded object-cover"
                        />
                        <span className="">data.username</span>
                    </div>
                </div>
                <div className="h-[300px] relative flex-1">
                    <Image
                        src="https://images.pexels.com/photos/14894654/pexels-photo-14894654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        fill={true}
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="">
                <p className="flex flex-col gap-4">
                    <p>Sint excepteur pariatur deserunt esse pariatur voluptate et et. Minim velit do proident nostrud consequat dolor anim ipsum aliqua ullamco. Dolor Lorem do minim occaecat aliquip ea excepteur duis veniam cupidatat exercitation. Ex sit in id ad quis ex do sunt irure pariatur nisi voluptate dolore. Amet nulla voluptate amet qui incididunt. Aliqua excepteur nostrud mollit aliquip ut ut cillum.</p>
                    <p>Pariatur tempor mollit velit esse sunt adipisicing aliqua duis ea ut exercitation. In Lorem sunt tempor nostrud proident ipsum enim eiusmod id aliquip. Aliqua officia quis exercitation et adipisicing deserunt non.</p>
                    <p>Do commodo aliqua sunt pariatur nostrud et. Nostrud non enim et est consequat id officia tempor sunt tempor eiusmod laboris magna. Nisi commodo aute nulla ullamco enim ut ex veniam. Nostrud reprehenderit excepteur cupidatat ad culpa fugiat sunt commodo dolore. Irure cillum eu mollit cupidatat voluptate esse ut aliquip anim dolore est. Ea voluptate fugiat irure officia pariatur Lorem nisi do labore proident commodo qui. Aliqua proident culpa irure excepteur esse officia exercitation laborum enim ad pariatur non amet.</p>
                </p>
            </div>
        </div>
    )
}
