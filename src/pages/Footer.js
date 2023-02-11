import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="bg-white text-center lg:text-left">
                <div
                    className="text-gray-700 text-center p-4"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2021 Copyright.
                    <a className="text-gray-800" href="#">
                       All rights are reserved.
                    </a>
                </div>
            </footer>

        </>

    )
}

export default Footer