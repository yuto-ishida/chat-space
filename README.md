## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|user_id|integer|null: false, foreign_key: true|
|name|string|null: false|
|update_at|datetime|null: false|

### Association
- has_many :members
- has_many :users
- has_many :messages

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false,|
|email|string|null: false|
|name|text|null: false,|
|pasword|string|null: false,|
|update_at|datetime|null: false,|

### Association
- has_many :members
- has_many :groups
- has_many :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false,|
|text|text|null: false,|
|image|string|null: false,|
|update_at|datetime|null: false,|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
