class BoardsController < ApplicationController


  def index
    @boards = Board.all

    respond_to do |format|
      format.json { render json: @boards }
    end
  end

  def show
    @board = Board.find(params[:id])

    respond_to do |format|
      format.json { render json: @board }
    end
  end

  def create
    @board = Board.new(board_params)

    if @board.save
      respond_to do |format|
        format.json { render json: @board }
      end
    end
  end

  def destroy
    @board = Board.find(params[:id]).destroy
     head :no_content
  end


  private
    def board_params
      params.require(:board).permit(:user_id, :title)
    end
end
