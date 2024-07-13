const features = [
    {
      name: "Comprehensive Visibility",
      description:
        "ConnectGrid ensures your audience sees everything about you at a glance. No more juggling multiple links.",
      href: "#",
      img: "./public/vite.svg",
    },
    {
      name: "Performance Analytics",
      description:
        "Track the performance of your ConnectGrid with insightful analytics. Understand what captures your audience's attention.",
      href: "#",
      img: "./public/vite.svg",
    },
    {
      name: "Email Collection",
      description:
        "Build your community directly through ConnectGrid! Collect audience emails effortlessly, expand your reach, and stay connected with your followers.",
      href: "#",
      img: "./public/vite.svg",
    },
  ];

export default function Features () {
    return (
        <div id="features" className="bg-[] py-7 md:py-12 w-full">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-[1100px] text-center ml-auto mr-auto">
            <h2 className="text-center text-4xl font-bold text-black">
              Features
            </h2>
            <p className="text-center mt-5 font-medium max-w-[35rem] ml-auto mr-auto">
              Explore a unified platform where you can effortlessly showcase your
              portfolio, social profiles, and latest updates — all in one link.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 max-w-[1100px] ml-auto mr-auto">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="flex flex-col items-center md:px-10"
                >
                  <dt className="text-base text-center font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-lg relative">
                      <img
                        unoptimized
                        src={feature.img}
                        alt={feature.name}
                        fill
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </dt>
                  <h3 className="text-[#ff4694] text-center font-bold text-xl">
                    {feature.name}
                  </h3>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600 text-center">
                    <p className="flex-auto text-base">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mx-auto max-w-[54rem] text-center mt-20">
            <h2 className="text-center text-clamp2 font-bold text-black">
              Why choose us?
            </h2>
            <p className="text-center mt-5 font-medium">
              Explore the power of ConnectGrid – Your All-in-One Link Solution!
              Unlock comprehensive visibility, seamless social integration, and
              customizable showcases in one platform
            </p>
          </div>
        </div>
      </div>
    )
}