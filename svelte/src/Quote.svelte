<style>
  .section-inner {
    padding: 90px;
    height: 200px;
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);
  }

  .image-wrapper {
    grid-row: 4/4;
    grid-column: 2/3;
    text-align: end;
  }

  .quote {
    grid-row: 2/3;
    grid-column: 2/4;
    text-align: center;
  }

  .name {
    grid-row: 4/5;
    grid-column: 3/4;
  }

  .status {
    grid-row: 3/4;
    grid-column: 3/4;
  }
</style>

<div class="section-outer">
  <div class="section-inner" id="quote">
    <div class="quote">
      "If enough Americans share daily how they feel, even if
      <br />
      they're well, this portal can provide the healthcare system
      <br />
      with critically valuable information."
    </div>

    <div class="image-wrapper">
      <img src="img/alexAzar.png" alt="Alex azar photo" />
    </div>
    <div class="name">
      <p>Alex Azar</p>
      <p>
        United States Secretary
        <br />
        of Health and Human Services
      </p>
    </div>
  </div>
</div>
