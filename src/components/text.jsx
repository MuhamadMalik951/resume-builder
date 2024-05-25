function Text({ text }) {
    return (
      <div className={'prev-job'}>
        <ul className="ml-5 mt-2 text-left" style={{ listStyleType: 'disc' }}>
          <li>{text}</li>
        </ul>
      </div>
    );
  }
  export default Text