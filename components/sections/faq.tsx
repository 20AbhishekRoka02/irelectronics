"use client";

import { useState } from "react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Icon } from "@/components/ui/icon";
import { SectionHeading } from "@/components/ui/section-heading";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section section-faq" id="faq">
      <Container className="faq-layout">
        <SectionHeading
          description={site.faq.description}
          eyebrow={site.faq.eyebrow}
          title={site.faq.title}
        />
        <div className="faq-list">
          {site.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index}`;

            return (
              <article className="faq-item" key={item.question}>
                <h3>
                  <button
                    aria-controls={answerId}
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    type="button"
                  >
                    <span>{item.question}</span>
                    <span aria-hidden="true" className="faq-toggle">
                      {isOpen ? "−" : "+"}
                    </span>
                    <span className="visually-hidden">
                      {isOpen ? site.faq.collapseLabel : site.faq.expandLabel}
                    </span>
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  hidden={!isOpen}
                  id={answerId}
                >
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
        <div className="faq-help">
          <Icon name="chat" />
          <span>{site.faq.helpText}</span>
        </div>
        <div className="section-action faq-action">
          <Button event="whatsapp_click" variant="whatsapp">
            {site.faq.action}
          </Button>
        </div>
      </Container>
    </section>
  );
}
