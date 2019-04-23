module Api::V1
class WodsController < ApplicationController
  before_action :set_wod, only: [:show, :update, :destroy]

  # GET /wods
  # GET /wods.json
  def index
    @wods = Wod.order("created_at DESC")

    render json: @wods
  end

  # GET /wods/1
  # GET /wods/1.json
  def show
    @wod
  end

  # POST /wods
  # POST /wods.json
  def create
    @wod = Wod.new(wod_params)

    if @wod.save
      render json: @wod, status: :created
    else
      render json: @wod.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /wods/1
  # PATCH/PUT /wods/1.json
  def update
    if @wod.update(wod_params)
      render json: @wod
    else
      render json: @wod.errors, status: :unprocessable_entity
    end
  end

  # DELETE /wods/1
  # DELETE /wods/1.json
  def destroy
    @wod.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wod
      @wod = Wod.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def wod_params
      params.require(:wods).permit(:title, :date, :workout)
    end
end
end
