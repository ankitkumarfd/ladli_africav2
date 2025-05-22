'use client';

import { useState, useRef } from 'react';

export default function PayFastForm() {
  const formRef = useRef(null);
  const [amount, setAmount] = useState(500.0); // Default amount

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
    <section className="mt-10">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        name="PayFastPayNowForm"
        action="https://payment.payfast.io/eng/process"
        method="post"
      >
        <input type="hidden" name="cmd" value="_paynow" required />
        <input
          type="hidden"
          name="receiver"
          value="12233443"
          pattern="[0-9]+"
          required
        />

        <div>
          <label htmlFor="PayFastAmount">Amount:</label>
          <input
            id="PayFastAmount"
            name="amount"
            type="number"
            step="0.01"
            min="5.00"
            placeholder="5.00"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
            required
            className="border"
          />
        </div>

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

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <input
            type="image"
            src="https://my.payfast.io/images/buttons/DonateNow/Primary-Large-DonateNow.png"
            alt="Donate Now"
            title="Donate Now with Payfast"
          />
        </div>
      </form>
    </section>
  );
}
