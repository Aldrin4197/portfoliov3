function Stats() {
    return (
      <>
        <div className="text-md stats stats-vertical lg:stats-horizontal shadow">
          <div className="stat">
            <div className="text-primary text-base font-bold  stat-title">Satisfied Clients</div>
            <div className="stat-value">30+</div>
            <div className="stat-desc text-md">Active since 2023</div>
          </div>
  
          <div className="stat">
            <div className="text-primary text-base font-bold stat-title">Finished Projects</div>
            <div className="stat-value">30+</div>
            <div className="stat-desc text-md">Completed by 2025</div>
          </div>
  
          <div className="stat">
            <div className="text-primary text-base font-bold  stat-title">Positive Feedbacks</div>
            <div className="stat-value">95%</div>
            <div className="stat-desc text-md">Updated as of 2025</div>
          </div>
        </div>
      </>
    );
  }
  
  export default Stats;
  