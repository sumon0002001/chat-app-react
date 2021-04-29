const MyMessage = ({ mesaage }) => {
    if (mesaage?.attachments?.length > 0) {
        return (
            <img
              src= {mesaage.attachments[0].file}
              alt = "message-attachment"
              className= "message-imgae"
              style= {{float: 'right'}}
              />
        )
    }

    return (
        <div className="message" style= {{float: 'right', marginRight: '18px', color: 'white', backgroundColor: '#3B2A50'}}>
            {mesaage.texr}
        </div>
    );
}

export default MyMessage;