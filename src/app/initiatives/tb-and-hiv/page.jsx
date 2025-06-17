import {
  TypographyH3,
  TypographyH1,
  TypographyP,
} from '@/components/custom/Typhographies';
import Image from 'next/image';
import bg_hiv from '@/public/assets/bg/bg_hiv4.webp';
import tb_and_hiv1 from '@/public/assets/initiatives/tb-and-hiv/tb-and-hiv1.jpg';

function page() {
  return (
    <main className="flex-grow ">
      <div className="relative w-full h-[85vh] overflow-hidden home mb-12">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={bg_hiv}
            alt="TB and HIV initiative background"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      <section className="container mx-auto px-4 my-5">
        <div className="text-center mb-16">
          <TypographyH1 className="">
            Combating TB & HIV through Awareness and Early Detection for
            Adolescents in Schools
          </TypographyH1>
        </div>

        <div
          className="flex flex-col-reverse lg:flex-row justify-between"
          data-aos="fade-right"
        >
          <div className="w-full lg:w-[60%]">
            <div>
              <TypographyH3 className="">{`SUMMARY`}</TypographyH3>
              <TypographyP className="mt-2 ">
                {`Adolescents are often left out of critical conversations on Tuberculosis (TB) and Human Immunodeficiency Virus (HIV), despite being at an age where early knowledge can significantly impact lifelong health behaviors. Lack of age-appropriate education, stigma, and silence around these diseases create an environment where misinformation thrives—putting young lives at risk.`}
              </TypographyP>
              <TypographyP className="mt-2 ">
                {`Ladli Foundation’s initiative is a school-based awareness and sensitization program designed to educate adolescents about TB and HIV prevention, symptoms, and the importance of empathy and non-discrimination. The goal is to build a generation that is not just health-aware, but also health-empathetic.`}
              </TypographyP>
            </div>

            <div className="mt-10">
              <TypographyH3>{`CHALLENGES`}</TypographyH3>

              <ul className="list-decimal space-y-3 mt-2">
                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Widespread Myths & Misconceptions : `}</span>
                    {`Students often grow up with limited or incorrect information about TB and HIV transmission.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Stigma in Educational Spaces : `}</span>
                    {`Affected individuals, or those with family members suffering from TB/HIV, face bullying and exclusion.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Low Symptom Awareness : `}</span>
                    {`Students and teachers may miss early signs of TB, leading to untreated and contagious cases.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Silence Around Sexual Health : `}</span>
                    {`In many schools, HIV is never discussed due to cultural taboos, leaving adolescents unprepared.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Lack of Referral Systems in Schools : `}</span>
                    {`No clear path exists for students showing symptoms to access government screening and treatment.`}
                  </TypographyP>
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <TypographyH3>{`OUR ACTION (Utilization of your donation)`}</TypographyH3>
              <TypographyP className="mt-2 ">
                {`Your donation will directly support :`}
              </TypographyP>

              <ul className="list-decimal space-y-3 mt-2">
                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Health Education Workshops in Schools : `}</span>
                    {`Age-appropriate, interactive sessions on the science, prevention, and stigma around TB and HIV.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`School Health Ambassadors Program : `}</span>
                    {`Train selected students and teachers as peer educators to promote awareness and act as health mentors.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Creation of Visual Learning Materials : `}</span>
                    {`Posters, comic books, videos, and digital content in local languages tailored to adolescent minds.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`Screening Referrals for Suspected Cases : `}</span>
                    {`Build linkages with local health departments for early testing and treatment when needed.`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    <span className="font-semibold">{`•	Parent & Teacher Sensitization : `}</span>
                    {`Conduct sessions to build support systems at home and in classrooms for affected students.`}
                  </TypographyP>
                </li>
              </ul>
            </div>

            <div className="mt-10">
              <TypographyH3 className="uppercase">{`Trusted and Reliable`}</TypographyH3>
              <TypographyP className="mt-2 ">
                {`Ladli Foundation is known for delivering large-scale, school-based gender and health programs across India. We work closely with education departments, school principals, and child welfare authorities to ensure smooth integration and cultural acceptance of health education in academic settings.`}
              </TypographyP>
            </div>

            <div className="mt-10">
              <TypographyH3 className="uppercase">{`Ladli Foundation’s Proven Track Record`}</TypographyH3>

              <ul className="list-decimal space-y-3 mt-2">
                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    {`Successfully implemented `}{' '}
                    <span className="font-semibold">{`WASH and MHM programs in 400+ schools`}</span>{' '}
                    {`across India`}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    {`Implemented health and gender education in`}{' '}
                    <span className="font-semibold">{`500+ schools across 14 states`}</span>{' '}
                  </TypographyP>
                </li>

                <li className="mx-4">
                  <TypographyP className="font-Poppins ">
                    {`Trained`}{' '}
                    <span className="font-semibold">{`1,000+ teachers and peer leaders `}</span>{' '}
                    {`on adolescent health and safety.`}
                  </TypographyP>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full mb-5 lg:w-[35%]" data-aos="fade-left">
            <div className=" ">
              <Image
                priority
                src={tb_and_hiv1}
                alt="kids"
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="w-full h-auto object-cover shadow-lg rounded-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default page;
