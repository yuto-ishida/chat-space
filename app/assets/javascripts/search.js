$(function() {
  var member_list = $("#user-search-result");
  function appendMembers(user){
    var html = `<div class="chat-group-user clearfix">
                <p class="chat-group-user__name">${user.name}</p>
                <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
                </div>`;
    member_list.append(html);
    };

  function appendUsers(name, user_id) {
   var html = `<div class='chat-group-user clearfix js-chat-member' id='chat_group_user_22'>
               <input name='group[user_ids][]' type='hidden' value="${user_id}">
               <p class='chat-group-user__name'>${name}</p>
               <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn' data-user-id = "${user_id}" data-user-name="${name}">削除</a>
               </div>`;
    $("#chat-group-users").append(html);
   }

    $("#user-search-result").on("click", ".chat-group-user__btn--add", function () {
    var user_name = $(this).data('user-name');
    var user_id = $(this).data('user-id');
    $(this).parent().remove();
    appendUsers(user_name, user_id);
    });

    $("#chat-group-users").on("click", ".js-remove-btn", function () {
      $(this).parent(".js-chat-member").remove()
    });



  $("#user-search-field").on("keyup", function() {
    var input = $("#user-search-field").val();

    $.ajax({
      type: 'GET',
      url: '/users',
      data: { name: input },
      dataType: 'json'
    })
    .done(function(members) {
      $("#user_search_result").empty();
        if (members.length !== 0) {
          members.forEach(function(user){
            appendMembers(user);
          })
        }
       })
       .fail(function() {
        alert('ユーザー検索に失敗しました');
        });
      });
   });


