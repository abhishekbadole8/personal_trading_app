import Style from "./page.module.css";

export default function Dashboard() {
  return (
    <>
      <div className={Style.Dashboard}>
        <div className={Style.leftStockList}>
          {/* head */}
          <div className={Style.stockListHead}>
            {/* nifty */}
            <div>
              <h4>Nifty</h4>
              <p>
                <span>21,500.09</span>
                <span className={Style.percentChange}>-100 (1%)</span>
              </p>
            </div>
            {/* bank nifty */}
            <div>
              <h4>Bank Nifty</h4>
              <p>
                <span>21,500.09</span>
                <span className={Style.percentChange}>-100 (1%)</span>
              </p>
            </div>
          </div>

          {/* list number */}
          <div className={Style.stockListNum}>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
            </ul>
          </div>

          {/* list symbols */}
          <div className={Style.stockListSymbols}>
            <ul>

              <li>
                <h5>Trident</h5>
                <p>
                  <span className={Style.SymbolCurPrice}>21,500.09</span>
                  <span className={Style.SymbolPriceChange}>-100 (1%)</span>
                </p>
              </li>

              <li>
                <h5>NHPC</h5>
                <p>
                  <span className={Style.SymbolCurPrice}>21,500.09</span>
                  <span className={Style.SymbolPriceChange}>-100 (1%)</span>
                </p>
              </li>
            
            </ul>
          </div>
        </div>
        <div className={Style.midContainer}></div>
        <div className={Style.RightMenu}></div>
      </div>
    </>
  );
}
