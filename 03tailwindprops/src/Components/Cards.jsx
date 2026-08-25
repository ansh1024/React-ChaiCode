import React from 'react'

function Cards(props) {
    console.log(props)
    return (
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
            <img
                className="w-24 h-24 rounded-full mx-auto"
                src="https://images.pexels.com/photos/6209890/pexels-photo-6209890.jpeg"
                alt=""
            />

            <div className="pt-6 space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        “Tailwind CSS is the only framework that I've seen scale on large
                        teams. It's easy to customize, adapts to any design, and the build
                        size is tiny.”
                    </p>
                </blockquote>

                <figcaption>
                    <div>
                        {props.username}
                    </div>
                    <div>
                        Specialist Engineer, Barclays
                    </div>
                </figcaption>
            </div>
        </figure>
    )
}

export default Cards