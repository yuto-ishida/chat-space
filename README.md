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
|id|integer|null: false, foreign_key: true|
|use_id|integer|null: false, foreign_key: true|
|text|text|null: false, foreign_key: true|
|name|text|null: false, foreign_key: true|
|update_at|datetime|null: false, foreign_key: true|

### Association
- has_many :members
- has_many :users
- has_many :messages

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|email|string|null: false, foreign_key: true|
|name|text|null: false, foreign_key: true|
|pasword|string|null: false, foreign_key: true|
|update_at|datetime|null: false, foreign_key: true|

### Association
- has_many :members
- has_many :groups
- has_many :messages

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|id|integer|null: false, foreign_key: true|
|text|text|null: false, foreign_key: true|
|image|string|null: false, foreign_key: true|
|update_at|datetime|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
