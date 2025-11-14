import { experiance } from "@/constants/experiance";

export default function Experiance() {
  return (
    <section className="experiance-work-section px-50 grid justify-center mb-24">
      <span className="experiance-work--title uppercase font-bold text-4xl bg-gradient-to-b from-[#5BADFF] to-[#1373D1] bg-clip-text text-transparent mb-14 text-center">
        experiance
      </span>
      <div className="experiance-work--container grid gap-12">
        {experiance.map((work) => (
          <div className="experiance-work--item">
            <div className="experiance-work--company flex justify-between">
              <div className="experiance-work--company--info flex gap-2.5">
                <div className="experiance-work--company--image w-[34px] h-[32px] rounded-full overflow-hidden">
                  <img className="w-full h-full object-cover" src={work.logo} alt="Company" />
                </div>
                <div className="experiance-work--company--title text-[21.74px] font-bold">
                     {work.title}
                </div>
              </div>
              <div className="experiance-work--company--date">
                <span className="text-[#8491A0] text-[14.49px]">
                    {work.time}
                </span>
              </div>
            </div>
            <div className="experiance-work--description text-[14.49px] text-[#8491A0] font-poppins mt-6">
                {work.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
