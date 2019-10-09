import { window } from "vscode";
import { localize, Settings } from "~/services";

export class Profile {
  public static async switch(profile?: string): Promise<void> {
    const { repo } = await Settings.get();

    const newProfile = await (async () => {
      if (profile) {
        return repo.profiles.find(prof => prof.name === profile);
      }

      const mappedProfiles = repo.profiles.map(
        prof => `${prof.name} [branch: ${prof.branch}]`
      );

      const selected = await window.showQuickPick(mappedProfiles);

      return repo.profiles.find(
        prof => `${prof.name} [branch: ${prof.branch}]` === selected
      );
    })();

    if (!newProfile) return;

    await Settings.set({
      repo: {
        currentProfile: (newProfile || repo.profiles[0]).name
      }
    });

    await window.showInformationMessage(
      localize("(info) repo.switchedProfile", newProfile.name)
    );
  }
}