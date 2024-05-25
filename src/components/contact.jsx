function Contact({ address, email, contactNo, text, name }) {
  return (
    <>
      <div className={'text-2xl font-bold text-blue-700'}>{name}</div>
      <div className=" mb-4 first-section">
        <div className="mt-2">{address}</div>
        <div className="email-section mt-2 mb-3">
          <div className="email">{email}</div>
          <div className="space">|</div>
          <div className="number">{contactNo}</div>
        </div>
        <div className={'text-center'}>{text}</div>
      </div>
    </>
  );
}

export default Contact