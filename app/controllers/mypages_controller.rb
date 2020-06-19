class MypagesController < ApplicationController
  def index
    add_breadcrumb "トップページ",  root_path
    add_breadcrumb "マイページ",  mypages_index_path
  end

  def card
    add_breadcrumb "トップページ",  root_path
    add_breadcrumb "マイページ",  mypages_index_path
    add_breadcrumb "支払方法",  mypages_card_path
  end

  def logout
    add_breadcrumb "トップページ",  root_path
    add_breadcrumb "マイページ",  mypages_index_path
    add_breadcrumb "ログアウト",   mypages_logout_path
  end
  

end
