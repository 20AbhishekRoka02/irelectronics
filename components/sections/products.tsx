import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function Products() {
  return (
    <section className="section section-products" id="products">
      <Container>
        <SectionHeading
          centered
          description={site.products.description}
          eyebrow={site.products.eyebrow}
          title={site.products.title}
        />
        <div className="product-grid">
          {site.products.cards.map((product, index) => (
            <article className="product-card" key={product.id}>
              <div className="product-card-top">
                <span className="icon-tile">
                  <Icon name={product.icon} />
                </span>
                <span className="product-index">0{index + 1}</span>
              </div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <ul>
                {product.details.map((detail) => (
                  <li key={detail}>
                    <Icon name="check" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="product-action"
                event="whatsapp_click"
                message={product.whatsappMessage}
                variant="whatsapp"
              >
                {product.action}
                <Icon name="arrow" />
              </Button>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
