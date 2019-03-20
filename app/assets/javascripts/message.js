$(function(){
  function buildSendMessageHTMLL(message){
    var imageHtml = message.image ? `<img src=${message.image}>` : ""
    var html =
      `
        <div class="messagedata" data-message-id="${message.id}">
          <div class="message__upper">
            <div class="message__upper--user-name">
              ${message.user_name}
            </div>
            <div class="message__upper--date">
              ${message.created_at}
            </div>
          </div>
          <div class="message__text">
            ${message.text}
            ${imageHtml}
          </div>
        </div>
      `
    return html;
  }

  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildSendMessageHTMLL(message);
      $('.messages').append(html);
      $("form")[0].reset();
      $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight}, 'fast');
    })
    .always(function(message){
      $('.submit-btn').prop("disabled", false);
    })
    .fail(function(message) {
      alert('メッセージを入力してください。')
    })
  })

    $(function(){
      setInterval(update, 5000)
        function update(){
          var message_id = $('.messagedata:last').data('message-id');
          var url = location.herf;
          console.log(message_id)
          $.ajax({
            url: url,
            type: 'GET',
            data:{id: message_id},
            dataType: 'json'
          })
          .done(function(data) {
          $.each(data, function(i, message) {
            var html = buildSendMessageHTMLL(message);
           $('.messages').append(html);
          $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight}, 'fast');
          });
        });
    }
  });
});
