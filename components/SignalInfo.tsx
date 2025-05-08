import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

import Colors from '@/constants/Colors';

export default function SignalInfo({ path }: { path: string }) {
  return (
    <ScrollView>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Signal has risen to become one of the most ubiquitous encrypted messaging applications in the world. Everyone has at least heard of it – even if it is not their preferred comms platform. The encryption is formally verified, meaning that third party companies and individuals have analyzed Signal’s methods and authenticated their claims about privacy and secrecy. This is common practice in the industry - for example, SimpleX and Threema have done similar verification.
          {'\n'}
        </Text>


        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
            However, there are reasons not to trust Signal completely. It has built a brand persona that is not entirely honest. There are numerous public posts by respected professionals that point out a variety of what they consider to be faults. Feel free to do your own research and verify these facts independently.
        {'\n'}
        </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
These are not conspiracy theories or arguments ad hominem. This is not an attack on Signal. We make no claims about the strength of its encryption, or any other app. This is about whether or not Signal is worthy of the blind trust that a lot of people place in its hands. It is not precisely what you think it is. Fundamentally, this is a summary of the key arguments.        {'\n'}
        </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
1) Sign up requires a phone number – Even though they have recently adopted usernames as a way of sharing contact information, Signal still needs a phone number to sign up. This is claimed to be a benefit, by offering a way to “protect” users from spam.        {'\n'}
        </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
A side effect of this is that it prevents most people in the world from signing up without disclosing a phone number that is tied to them in some way. Regardless of whether or not a country requires Know Your Customer (KYC) identity verification for cell service, a phone number acts as a globally unique identifier that travels everywhere with you.        {'\n'}
        </Text>


        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
When someone has your phone number, it is trivial to determine your location anywhere in the world. Full stop. With a bit of knowledge, and the right equipment – especially at a nation-state level with access to tools like SS7 and Pegasus – it only gets easier every day.        {'\n'}
        </Text>


        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
Physical security is a significant component of security overall. If you truly value privacy and anonymity, never give out a phone number that is tied to the SIM card physically in the device. To anyone, anywhere, for any reason.        {'\n'}
        </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
2) Signal is not truly open source – Though they claim to be, Signal is not completely free open source software. Most notably, they have a closed source “anti-spam” (remember this argument?) component. They say this piece is proprietary and have not allowed for the code to be reviewed publicly. Even when you compile the code from public sources yourself, this component is provided as a prebuilt binary blob.       {'\n'} </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
Though Signal claims that it does not scan the contents of messages or do any invasive monitoring, we really have no way of knowing. We just have to trust Signal when they say that. Security through obscurity does not offer any real security at all, in this case. Withholding technical details about an app does not do much to actually protect a system. Just ask any hacker or reverse engineer.       {'\n'} </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
3) Questionable funding – It is public information that Signal received much of its original seed development money from entities known as “Radio Free Asia” and “Open Technology Fund”. These are known fronts for the CIA. Of course, government investment has brought us many wonderful things. But what motivation does the CIA have to provide millions of dollars in funding to a specific chat application, when there are dozens from which to choose?       {'\n'} </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
Famously at the end of 2023, the government is no longer supporting continued funding for Signal. The costs to run Signal are estimated to reach $50 million USD per year by 2025, and will now need to rely on donations from users and philanthropists.      {'\n'}  </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
4) Trust and anonymity vs. security – Signal has never promised anonymity, only security. It is important to separate these unique topics and recognize the differences.   {'\n'}     </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
5) Signal is centrally controlled – Unless you run a private Signal server AND compile the application from source with changes that direct the messages only to your server, ALL communication travels through servers controlled by Signal, located under US jurisdiction. Signal says that they do not keep significant logs or store messages, but we just have to trust their word.      {'\n'}  </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
There has never been a way to change the main server that the standard app (Google Store / Apple Store / Official version) points to, which would be a very easy feature for Signal to add. Instead, the server address is hard-coded into the application. To change it, the code would have to be modified and built from source with every update. Contrast this with an app like SimpleX, which allows you to add and remove Relay servers as desired.{'\n'}
        </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
Running a server and maintaining a custom Signal fork is not an easy task. This alone could potentially be a part-time or full-time job for a reasonably talented IT / DevOps person, depending on how many users they are supporting.{'\n'}
        </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
Just because the encryption is good doesn’t mean anything. Encrypted messaging applications and secure phones have become a commodity. In fact, encryption is rarely broken, just sidestepped. Attackers find a different way to read the messages when they are already decrypted on the device, in much the same way someone would read a message over your shoulder. This is an advertised capability of spyware commonly employed by nation-states.{'\n'}
        </Text>

        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
The point is that people who buy “secure phones” and use secure messaging systems have different threat models – the things that they are trying to protect against. Trust, privacy, and anonymity are distinct facets that address different problems under the umbrella of security. It seems like most of these users are trying to separate their true identity from their device, so that only the people that they trust with the contact info know who is actually on the other side of the conversation. Signal is counter to this way of thinking about safety.{'\n'}
        </Text>


        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
A sufficiently anonymous system used properly can resist any attacker.{'\n'}
        </Text>

      </View>

      <View style={styles.helpContainer}>
      <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
Resources:
        </Text>
        <ExternalLink
          style={styles.helpLink}
          href="https://blog.dijit.sh/i-don-t-trust-signal/">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
          https://blog.dijit.sh/i-don-t-trust-signal/
                    </Text>
        </ExternalLink>
        <ExternalLink
          style={styles.helpLink}
          href="https://signal.org/bigbrother/">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
          https://signal.org/bigbrother/
                    </Text>
        </ExternalLink>
        <ExternalLink
          style={styles.helpLink}
          href="https://yasha.substack.com/p/signal-is-a-government-op-85e">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
          https://yasha.substack.com/p/signal-is-a-government-op-85e
                    </Text>
        </ExternalLink>
        <ExternalLink
          style={styles.helpLink}
          href="https://signal.org/blog/signal-is-expensive/">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
          https://signal.org/blog/signal-is-expensive/
                              </Text>
        </ExternalLink>
        <ExternalLink
          style={styles.helpLink}
          href="https://en.wikipedia.org/wiki/Pegasus_(spyware)">
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
          https://en.wikipedia.org/wiki/Pegasus_(spyware)
                    </Text>
        </ExternalLink>


        
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
