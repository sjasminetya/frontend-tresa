import React from 'react';
import Fade from 'react-reveal/Fade';
import InputText from '../../fields/InputText';
import InputFile from '../../fields/InputFile';

const Payment = (props) => {
  const { data, ItemDetails, checkout } = props;
  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;

  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-items-center">
          <div className="col-5 border-right py-5" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran:</p>
              <p>Tax: {tax}%</p>
              <p>Sub total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>
              {
                ItemDetails.bank.map((bank, key) => (
                  <div className="row mt-4" key={key}>
                    <div className="col-3 text-right">
                      <img src={`${process.env.REACT_APP_API}/${bank.imageUrl}`} alt={bank.nameBank} width={60} />
                    </div>
                    <div className="col">
                      <dl>
                        <dd>{bank.nameBank}</dd>
                        <dd>{bank.nomorRekening}</dd>
                        <dd>{bank.name}</dd>
                      </dl>
                    </div>
                  </div>
                ))
              }
            </Fade>
          </div>
          <div className="col-5 py-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile accept="image/*" id="proofPayment" name="proofPayment" onChange={props.onChange} />

              <label htmlFor="bankName">Asal Bank</label>
              <InputText id="bankName" name="bankName" type="text" value={data.bankName} onChange={props.onChange} />

              <label htmlFor="bankHolder">Nama Pengirim</label>
              <InputText id="bankHolder" name="bankHolder" type="text" value={data.bankHolder} onChange={props.onChange} />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  )
}

export default Payment
