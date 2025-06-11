import { test, expect } from "@playwright/test";
import { TextSection } from "../src/page-elements/dropdown-elements";

test("Check text on the page using composite pattern", async ({ page }) => {
  await page.goto("https://aws.amazon.com/ec2/?nc2=h_ql_prod_fs_ec2");

  const section = new TextSection(page);
  const actualTexts = await section.getText();

  await expect(actualTexts).toEqual([
    "Amazon EC2",
    "Access reliable, scalable infrastructure on demand. Scale capacity within minutes with SLA commitment of 99.99% availability.",
    "Learn more",
    "Provide secure compute for your applications. Security is built into the foundation of Amazon EC2 with the AWS Nitro System.",
    "Learn more",
    "Optimize performance and cost with flexible options like AWS Graviton-based instances, Amazon EC2 Spot instances, and AWS Savings Plans.",
    "Learn more",
    "Migrate and build apps with ease using AWS Migration Tools, AWS Managed Services, or Amazon Lightsail. Learn how AWS can help.",
    "Learn more",
    "Amazon EC2 delivers secure, reliable, high-performance, and cost-effective compute infrastructure to meet demanding business needs.",
    "Migrate your business enterprise applications to AWS",
    "Access the on-demand infrastructure and capacity you need to run HPC applications faster and cost-effectively.",
    "Learn more about HPC on AWS",
    "Build, test, and sign on-demand macOS workloads. Access environments in minutes, dynamically scale capacity as needed, and benefit from AWS’s pay-as-you-go pricing.",
    "Learn more about EC2 Mac instances",
    "Amazon EC2 delivers the broadest choice of compute, networking (up to 400 Gbps), and storage services purpose-built to optimize price performance for ML projects.",
    "Learn more about ML infrastructure",
  ]);
});
