$(function(){
  function buildSendMessageHTMLL(message){
        var html = `<div class="message">
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
                      <img src=${message.image}>
                     </div>
                   </div>`
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
    .done(function(messagedata){
      var html = buildHTML(data);
      $('.messages').append(html);
      $("form")[0].reset();
      $('.messages').animate({scrollTop:$('.messages')[0].scrollHeight}, 'fast');
    })
    .fail(function(messagedata) {
      alert('メッセージを入力してください。')
    })
  })
})
