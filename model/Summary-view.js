(function(exports) {
  function SummaryView(summary) {
    this.summary = summary
  }

  SummaryView.prototype.returnSummary = function() {
    string = `<div>${this.summary}<button type='submit' id='back'>Back</button></div>`
    return string
  }
  exports.SummaryView = SummaryView
})(this)
