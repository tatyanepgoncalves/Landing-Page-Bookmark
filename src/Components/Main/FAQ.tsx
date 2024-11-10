

export default function FAQ() {
  return (
    <section className="FAQ">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
      </div>  

      <div className="Q-A">
          <div className="qa-box box1">
              <h3 className="questions">What is Bookmark?</h3>
              <p className="answer">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>
          </div>

          <div className="qa-box box2">
              <h3 className="questions">How can I request a new browser?</h3>
              <p className="answer">Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p>
          </div>

          <div className="qa-box box3">
              <h3 className="questions">Is there a mobile app?</h3>
              <p className="answer">Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.</p>
          </div>

          <div className="qa-box box4">
              <h3 className="questions">What about other Chromium browsers?</h3>
              <p className="answer">Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.</p>
          </div>
          <button className="more-info">More Info</button>
            
      </div>

    </section>
  )
}
