import styles from "./About.module.css";
import FAQ from "./FAQ";

export default function About() {
  return (
    <>
      <div className={`${styles.container} ${styles.flex} ${styles.flexCol}`}>
        <h1>Discover the Functionality of IntelliText: FAQs</h1>

        <div className={`${styles.innerContainer}`}>
          <FAQ
            ques="How can IntelliText help improve my writing productivity?"
            ans="IntelliText offers a range of features that can enhance your writing productivity. You can easily count characters and words, convert text to lowercase or uppercase, clear text for a fresh start, and copy processed text for quick sharing or usage."
          />

          <FAQ
            ques="Is there a limit to the amount of text that IntelliText can handle?"
            ans="IntelliText can handle significant amounts of text, but extremely large texts may take longer to process, depending on the capabilities of your device."
          />

          <FAQ
            ques="Can I revert back to my original text if I make changes by mistake?"
            ans="Yes, Intellitext supports undoing changes. Just click the undo button to revert back to a previous version of your text."
          />

          <FAQ
            ques="Can I use IntelliText on different devices and platforms?"
            ans="Yes! IntelliText is a web-based tool that can be accessed through any device with an internet connection and a web browser. It is compatible with various platforms, including desktop computers, laptops, tablets, and smartphones."
          />

          <FAQ
            ques="Are there any limitations to the character and word counting features?"
            ans="IntelliText accurately counts characters and words in the provided text. However, it's important to note that certain special characters, symbols, or non-alphabetic scripts may be counted differently based on the specific counting rules implemented."
          />

          <FAQ
            ques="Can I customize the formatting of the processed text?"
            ans="IntelliText focuses on text analysis and manipulation rather than formatting. Therefore, it does not provide customization options for text formatting such as font styles, colors, or alignments. It focuses primarily on providing text-related utilities."
          />

          <FAQ
            ques="Is IntelliText available in multiple languages?"
            ans="Yes, IntelliText supports multiple languages. It can process text in any language as long as the device and browser used to access the tool support the specific language characters and scripts."
          />

          <FAQ
            ques="Does IntelliText store or save the text I input?"
            ans="No, IntelliText does not store or save any text that you input or process. It respects your privacy, and all text remains confidential and is not retained after you leave the website or refresh the page."
          />

          <FAQ
            ques="Can I integrate IntelliText into my own website or application?"
            ans="At the moment, IntelliText is a standalone web tool and does not
            provide direct integration options. However, you can utilize the
            functionalities provided by IntelliText by linking to the tool or
            embedding it as an iframe on your website or application."
          />
        </div>
      </div>
    </>
  );
}
