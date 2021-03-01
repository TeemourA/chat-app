const MyMessage: React.FC<any> = ({ message }) => {
  const isImage = message?.attachments[0]?.file;
  
  const outputMessage = isImage ? (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{ float: 'right' }}
      />
    ) : (
      message.text
    );    

  return (
    <div
      className="message"
      style={{
        float: 'right',
        marginRight: '18px',
        color: 'white',
        backgroundColor: '#3a2b50',
      }}
    >
      {outputMessage}
    </div>
  );
};

export default MyMessage;
