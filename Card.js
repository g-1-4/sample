import React from 'react'

export default function card() {
  return (
    <div>
      <div>
        <div class="card mt-3" style={{ width: "18rem", maxHeight: "300px" }}>
          <img src="..." class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is important text</p>
            <div class="container w-100">
              <select class="m-2 h-100 bg-success Rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select class="m-2  h-100 bg-success Rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div class="d-inline fs-5 h-100">Total Price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
