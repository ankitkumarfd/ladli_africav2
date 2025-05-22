'use client';

import { useState, useRef } from 'react';
import bg from '@/public/assets/homewall.png';
import AnimateOnScroll from '@/components/common/AOS/AnimateOnScroll';
import { TypographyH1, TypographyP } from '@/components/custom/Typhographies';

function page() {
  const formRef = useRef(null);
  const [amount, setAmount] = useState(500.0);

  const handleSubmit = (e) => {
    const form = formRef.current;
    if (!form) return;

    // Ensure minimum amount
    if (amount < 5) {
      e.preventDefault();
      alert('Minimum donation is 5.00');
      return;
    }

    // Set the correct value for amount input before submitting
    form['amount'].value = amount.toFixed(2);
  };

  return (
    <AnimateOnScroll>
      <main className="flex-grow ">
        <div className="relative w-full h-[85vh] overflow-hidden home mb-12">
          <div
            style={{ backgroundImage: `url(${bg.src})` }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat h-[85vh]"
          ></div>
        </div>

        <section className="">
          <div className="text-center mb-8">
            <TypographyH1 className="">Donate Now</TypographyH1>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:items-center">
              <div data-aos="fade-right" className="text-justify">
                <TypographyP className="text-justify mb-4 ">
                  {`Ladli Foundation Africa is dedicated to empowering young girls by providing access to menstrual hygiene products, advancing sexual and reproductive health education, strengthening WASH infrastructure awareness in schools, and combating TB and HIV through awareness and early detection initiatives. Your support can help us reach more underserved communities, ensuring that adolescent girls grow up with dignity, knowledge, and better health. By donating, you are not just supporting a cause you are transforming lives, nurturing future leaders, and building a healthier, more equitable Africa. Every contribution makes a real difference. It means a girl doesn’t have to miss school during her period, it means a young life is protected from preventable diseases. Together, we can break the cycle of silence, stigma, and suffering. Your kindness helps us create safe spaces for dialogue, ensure schools are equipped to support girls, and empower youth with the tools they need to take charge of their health and future. Join us in creating a world where no girl is held back because of her period or lack of access to healthcare. Change starts with you—be the reason a girl smiles, stays healthy, and dares to dream.`}
                </TypographyP>
              </div>
              <div
                className="flex relative justify-center"
                data-aos="fade-left"
              >
                <form
                  className="w-full max-w-lg bg-white shadow-md rounded px-5 lg:px-8 pt-6 pb-8 mb-4"
                  ref={formRef}
                  onSubmit={handleSubmit}
                  name="PayFastPayNowForm"
                  action="https://payment.payfast.io/eng/process"
                  method="post"
                >
                  <div className="flex gap-2 justify-between items-center mb-5">
                    <div
                      className="border border-gray-100 px-5 py-2 rounded-md shadow-sm cursor-pointer"
                      onClick={(e) => setAmount(500)}
                    >
                      <span>500</span>
                    </div>
                    <div
                      className="border border-gray-100 px-5 py-2 rounded-md shadow-sm cursor-pointer"
                      onClick={(e) => setAmount(1000)}
                    >
                      <span>1000</span>
                    </div>
                    <div
                      className="border border-gray-100 px-5 py-2 rounded-md shadow-sm cursor-pointer"
                      onClick={(e) => setAmount(1500)}
                    >
                      <span>1500</span>
                    </div>
                    <div
                      className="border border-gray-100 px-5 py-2 rounded-md shadow-sm cursor-pointer"
                      onClick={(e) => setAmount(2000)}
                    >
                      <span>2000</span>
                    </div>
                    <div
                      className="border border-gray-100 px-5 py-2 rounded-md shadow-sm cursor-pointer"
                      onClick={(e) => setAmount(2500)}
                    >
                      <span>2500</span>
                    </div>
                  </div>

                  <input type="hidden" name="cmd" value="_paynow" required />
                  <input
                    type="hidden"
                    name="receiver"
                    value="12233443"
                    pattern="[0-9]+"
                    required
                  />

                  {/* Hidden quantity input with default value 1 */}
                  <input type="hidden" name="custom_quantity" value="1" />

                  <input
                    type="hidden"
                    name="item_name"
                    value="Donate to Ladli Africa"
                    maxLength="255"
                    required
                  />
                  <input
                    type="hidden"
                    name="item_description"
                    value="Donate to the Ladli Foundation Africa. Any amount will help us carry out our important initiatives in Africa."
                    maxLength="255"
                  />

                  <div className="mb-4">
                    <label
                      htmlFor="amount"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Amount
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder="Enter Amount"
                      id="PayFastAmount"
                      name="amount"
                      type="number"
                      step="0.01"
                      min="5.00"
                      value={amount}
                      onChange={(e) =>
                        setAmount(parseFloat(e.target.value) || 0)
                      }
                      required
                    />
                  </div>

                  <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <input
                      type="image"
                      src="https://my.payfast.io/images/buttons/DonateNow/Primary-Large-DonateNow.png"
                      alt="Donate Now"
                      title="Donate Now with Payfast"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </AnimateOnScroll>
  );
}

export default page;
