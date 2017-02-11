class CardsController < ApplicationController
  def index
    @cards = Card.all

    respond_to do |format|
      format.json { render json: @cards }
    end
  end

  def create
    @card = Card.new(card_params)

    if @card.save
      respond_to do |format|
        format.json { render json: @card }
      end
    else
      respond_to do |format|
        format.json { render json: { error: "List create failed." }, status: "unprocessable_entity" }
      end
    end
  end


  private
    def card_params
      params.require(:card).permit(:description, :list_id)
    end
end
