/// <reference types = "cypress"/>

describe('Cars.com check order of listed prices', () => {
      beforeEach(() => {
        cy.visit('https://www.cars.com/',{ headers: { "Accept-Encoding": "gzip, deflate" }})
        cy.get('#make-model-search-stocktype').select('used')
        cy.get('#make-model-maximum-distance').select('100')
        cy.get('#make-model-zip').clear().type('60646')
        cy.get('.sds-button').first().click()
        cy.wait(2000)
      });


     it('should check prices by highest price', () => {
        cy.get("#sort-dropdown").select('list_price_desc')
        cy.wait(2000)
        cy.scrollTo("bottom");
        cy.get('.primary-price').then(prices => {
            for (let i = 1; i < prices.length - 1 ; i++) {
              
              const currentPrice = Number(prices[i].textContent.replace(/[^0-9.-]+/g,""));
              const nextPrice = Number(prices[i + 1].textContent.replace(/[^0-9.-]+/g,""));
              if (currentPrice == nextPrice){
                continue
              }else{
                expect(currentPrice).to.be.greaterThan(nextPrice);
              }
              
            }
          });
      });

      
      it('should check prices by lowest price', () => {
        cy.get("#sort-dropdown").select('list_price')
        cy.wait(2000)
        cy.scrollTo("bottom");
        cy.get('.primary-price').then(prices => {
            for (let i = 1; i < prices.length - 1 ; i++) {
              const currentPrice = Number(prices[i].textContent.replace(/[^0-9.-]+/g,""));
              const nextPrice = Number(prices[i + 1].textContent.replace(/[^0-9.-]+/g,""));
              if(currentPrice == nextPrice){
                continue
            }else {
              expect(currentPrice).to.be.lessThan(nextPrice);
          }
        }
      });
  });
})