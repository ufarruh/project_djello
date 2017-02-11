class ListsController < ApplicationController


  def index
    @lists = current_user.boards.find_by_id(params[:board_id]).lists

    respond_to do |format|
      format.json { render json: @lists }
    end

  end


  def create
    @list = current_user.boards.find_by_id(params[:board_id]).lists.new(list_params)

    if @list.save
      respond_to do |format|
        format.json { render json: @list }
      end
    else
      respond_to do |format|
        format.json { render json: { error: "List create failed." }, status: "unprocessable_entity" }
      end
    end
    
  end

  def destroy
    @list = List.find(params[:id]).destroy

    head :no_content
  end



  private
    def list_params
      params.require(:list).permit(:title, :board_id)
    end
end
