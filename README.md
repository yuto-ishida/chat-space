## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|update_at|datetime|null: false|

### Association
- has_many :members
- has_many :users, through: :groups_users
- has_many :messages

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|email|string|unipue: true|
|name|string|null: false, index: false|
|pasword|string|null: false,|
|update_at|datetime|null: false,|

### Association
- has_many :members
- has_many :groups, through: :groups_users
- has_many :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|message|text|
|image|text|
|update_at|datetime|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
