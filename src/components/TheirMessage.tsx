const TheirMessage: React.FC<any> = ({ lastMessage, message }) => {
  const isFirstMessageByUser =
    !lastMessage && lastMessage?.sender.username !== message?.sender.username;

  const isImage = message?.attachments[0]?.file;

  const outputMessage = isImage ? (
    <img
      src={message.attachments[0].file}
      alt="message-attachment"
      className="message-image"
      style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
    />
  ) : (
    <div
      className="message"
      style={{
        marginLeft: isFirstMessageByUser ? '4px' : '48px',
        float: 'left',
        backgroundColor: '#cabcdc',
      }}
    >
      {message.text}
    </div>
  );

  return (
    <div className="message-row">
      {isFirstMessageByUser && (
        <div
          className="message-avatar"
          style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
        />
      )}
      {outputMessage}
    </div>
  );
};

export default TheirMessage;
