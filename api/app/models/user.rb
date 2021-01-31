# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class User < ApplicationRecord
  has_many :reviews
  has_many :purchases
  has_many :purchased_products, through: :purchases, source: :product, class_name: 'Purchase'
end
