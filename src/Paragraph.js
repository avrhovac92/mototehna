import React, { Component } from 'react';
import './css/Paragraph.css';

export default class Paragraph extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <h4 class="proizvodnja">PROIZVODNJA</h4>
          <div class="lorem-ipsum">
            <p>
              Lorem ipsum dolor sit amet, consectetur <br />
              adipiscing elit. Praesent a ex eu enim aliquet <br />
              dictum eu ac quam. Mauris pretium, diam a <br />
              efficiut hendrerit, magna matus feugiat libero, eu <br />
              finibus turpis dolor sed orci.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
