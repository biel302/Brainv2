endPage() {
  return (
    <div>
      {this.state.showPopup ?  
        <Popup  
                  text='Click "Close Button" to hide popup'  
                  closePopup={this.togglePopup.bind(this)}  
        />  
        : null  
      }  
    </div>
    <div>
      <div>
        <button className="btn btn-dark" onClick={this.handleSubmit}>
          Review
        </button>
      </div>
      <div>
        <button className="btn btn-dark" onClick={this.handleSubmit}>
          Exit
        </button>
      </div>
      <div>
        <a href='/themes.txt'>
          Download
        </a>
      </div>
      <div>
        <button className="btn btn-dark" onClick={this.handleSubmit}>
          Feedback
        </button>
      </div>
    </div>
  )
}