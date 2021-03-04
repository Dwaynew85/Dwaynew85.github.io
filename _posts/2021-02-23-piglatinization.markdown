---
layout: post
title:      "Piglatinization!!!"
date:       2021-02-23 08:57:33 +0000
permalink:  piglatinization
---


So the subject is on converting a string, be it a word or sentence, into pig latin! Something I never cared to pay attention to til it became an assignment. Why does it even exist? It's like the mosquitoes of language. I struggled for HOURS trying to figure out how to convert it all. While keeping it as neat as possible. I did quite a bit of research online yet everything was drawn out, complicated, or inefficient. I didn't want it to work just to pass the rspec tests. I wanted it to work with ANY word and most sentences(most). I didn't bother exclude characters that weren't letters. By time I got it all working I was done with it. So this is what I did:
```
class PigLatinizer

  def piglatinize_word(word)
    vowels = %w(a e i o u A E I O U)
    consonants = []
    if vowels.include?(word[0])
      @piglatin = word + "way"
    else
      letters = word.split('')
      until vowels.include?(letters[0])
        consonants << letters[0]
        letters.shift
      end
      @piglatin = letters + consonants << "ay"
    end
    @piglatin.class == Array ? @piglatin.join : @piglatin
  end

  def piglatinize_sentence(sentence)
    words = sentence.split(" ")
    piglatin = words.map {|word| piglatinize_word(word)}
    piglatin.join(" ")
  end

  def piglatinize(statement)
    if statement.split(" ").count == 1
      piglatinize_word(statement)
    else
      piglatinize_sentence(statement)
    end
  end
end
```
It's broken down into three methods. One just for word, one just for sentences, one for both. Sentences is simple, it just uses the method for words. Yet words was the KICKER! Started with creating a vowels array. Thought I could use regex, but two hours later I decided to go with what I knew better. Then an array for consonants. Since the rules were different if the word started with a vowel, that was the first thing to check. If it did, added "way". If not, it created an array of letters. Then it iterated over the letters array until it started with a vowel. If it didn't, the letter was added to the consonants array and then deleted. The consonants array was added to the end of the letters array along with "ay". Then it checked the class of the piglatin instance variable to check if it was an array. If so, it joined them. If not, it remained as is. Done!
This all came together after watching what several other people did and taking what I liked and didn't like from their methods. 
