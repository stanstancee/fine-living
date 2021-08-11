import { PayPalButton } from "react-paypal-button-v2";

export default  function PayPal({total}){

    return (
      <PayPalButton
        amount={total}
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderId: data.orderID
            })
          });
        }}
        options={{
          clientId: "sb"
        }}
      />
    );
  }
