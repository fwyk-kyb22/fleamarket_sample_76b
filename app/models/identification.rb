class Identification < ApplicationRecord
  belongs_to :user, optional: true
  has_one :address
  validates :familyname,:firstname,:familyname_kana,:firstname_kana,:birth_date ,presence: true

  accepts_nested_attributes_for :address 
  
end
